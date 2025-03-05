import { useState } from "react";

import { useNavigate } from "react-router";
import { Button, Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { login } from "../../api/mockData";
import { SigninDTO } from "../../model/types";

type FieldType = {
  email: string;
  password: string;
};

export const SinginScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const getData = async ({ email, password }: FieldType) => {
    setIsLoading(true);
    try {
      const response = await login(email, password);
      const data: SigninDTO = await response.json();
      localStorage.setItem("token", data.data.token);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const sumbitHandler = async (fields: FieldType) => {
    await getData(fields);
    navigate("/profile");
  };

  return (
    <Form layout="vertical" onFinish={sumbitHandler}>
      <Form.Item<FieldType>
        label="Email adress"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Enter a valid email address",
          },
        ]}
        extra="We`ll never share your email with anyone else."
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Password is required" }]}
      >
        <Input placeholder="Password" />
      </Form.Item>
      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          icon={
            isLoading && (
              <Spin indicator={<LoadingOutlined spin />} size="small" />
            )
          }
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
