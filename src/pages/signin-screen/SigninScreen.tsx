import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";

type FieldType = {
  email: string;
  password: string;
};

export const SinginScreen = () => {
  const navigate = useNavigate();

  const sumbitHandler = (values: FieldType) => {
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
