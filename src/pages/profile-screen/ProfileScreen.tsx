import { useEffect, useState } from "react";

import { Button, Skeleton } from "antd";
import { useNavigate } from "react-router";

import { AuthorDTO, ProfileDTO, QuoteDTO } from "../../model/types";
import { getAuthor, getProfile, getQuote } from "../../api/mockData";
import { ProfileModal } from "../../components/profile-modal/ProfileModal";

import styles from "./ProfileScreen.module.scss";

export const ProfileScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [isProfileLoading, setIsProfileLoading] = useState<boolean>(false);
  const [isAuthorLoading, setIsAuthorLoading] = useState<boolean>(false);
  const [isQuoteLoading, setIsQuoteLoading] = useState<boolean>(false);

  const [profile, setProfile] = useState<ProfileDTO | null>(null);
  const [author, setAuthor] = useState<AuthorDTO | null>(null);
  const [quote, setQuote] = useState<QuoteDTO | null>(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const getAuthorData = async () => {
    setIsAuthorLoading(true);
    try {
      const response = await getAuthor(token!);
      const data: AuthorDTO = await response.json();
      setAuthor(data);
      getQuoteData(data.data.authorId);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAuthorLoading(false);
    }
  };

  const getQuoteData = async (authorId: number) => {
    setIsQuoteLoading(true);
    try {
      const response = await getQuote(token!, authorId);
      const data: QuoteDTO = await response.json();
      setQuote(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsQuoteLoading(false);
    }
  };

  const getProfileData = async () => {
    setIsProfileLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await getProfile(token!);
      const data: ProfileDTO = await response.json();
      setProfile(data);
    } catch (error) {
      console.error(error);
      navigate("/signin");
    } finally {
      setIsProfileLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      await getProfileData();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      isModalOpen && (await getAuthorData());
    })();

    return () => {
      if (!isModalOpen) {
        setAuthor(null);
        setQuote(null);
      }
    };
  }, [isModalOpen]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        {isProfileLoading ? (
          <Skeleton
            avatar={{ size: 80 }}
            active
            paragraph={{ rows: 1, width: 80 }}
          />
        ) : (
          <>
            {" "}
            <img
              src="/images/avatar.jpg"
              alt="Profile photo"
              width={80}
              height={80}
              className={styles.avatar}
            />
            <div>
              <h1 className={styles.greeting}>
                Welcome, {profile?.data.fullname}!
              </h1>
              <Button type="primary" onClick={openModal}>
                Update
              </Button>
            </div>
          </>
        )}
      </div>
      {author?.data.name && quote?.data.quote && (
        <span>
          {author?.data.name}: {quote?.data.quote}
        </span>
      )}
      <ProfileModal
        isModalOpen={isModalOpen}
        isAuthorLoading={isAuthorLoading}
        isQuoteLoading={isQuoteLoading}
        isAuthorExist={author?.success!}
        isQuoteExist={quote?.success!}
        closeModal={closeModal}
      />
    </div>
  );
};
