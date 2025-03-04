import { Button, Modal } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import { Loader } from "../loader/Loader";

type ProfileModalProps = {
  isModalOpen: boolean;
  isAuthorLoading: boolean;
  isQuoteLoading: boolean;
  isAuthorExist: boolean;
  isQuoteExist: boolean;
  closeModal: () => void;
};

export const ProfileModal = ({
  isModalOpen,
  isAuthorLoading,
  isQuoteLoading,
  isAuthorExist = false,
  isQuoteExist = false,
  closeModal,
}: ProfileModalProps) => {
  const lodaingHandler = (isLoading: boolean, isDataExist: boolean) => {
    if (isLoading) {
      return <Loader />;
    } else if (isDataExist) {
      return <CheckOutlined />;
    } else {
      return <></>;
    }
  };

  return (
    <Modal
      open={isModalOpen}
      closeIcon={null}
      footer={
        <Button onClick={closeModal} type="primary">
          Cancel
        </Button>
      }
    >
      <h1>Requestig the quote</h1>
      <p>
        Step 1: Requesting author..{" "}
        {lodaingHandler(isAuthorLoading, isAuthorExist)}
        {/* {isAuthorLoading ? <Loader /> : <CheckOutlined />} */}
      </p>
      <p>
        Step 2: Requesting quote..{" "}
        {lodaingHandler(isQuoteLoading, isQuoteExist)}
        {/* {isQuoteLoading ? <Loader /> : <CheckOutlined />} */}
      </p>
    </Modal>
  );
};
