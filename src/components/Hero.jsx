import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Form, Input } from "antd";
import { Div } from "./ReusableStyles";
import bg from "../assets/image.jpg";
import axios from "axios";

const Hero = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getdata = async () => {
    const response = await axios.post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "5cityslicka",
    });
    console.log(response.data);
  };
  useEffect(() => {
    getdata();
  });
  return (
    <>
      <Div container>
        <Row>
          <Col form_con span={10}>
            <Div form>
              <h1>Welcome Back</h1>
              <p>Sub-title text goes here</p>
            </Div>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                offset: 5,
                span: 14,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address!",
                  },
                ]}
              >
                <Input placeholder="Email Address*" size="large" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter the password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password*" size="large" />
              </Form.Item>
              <Div submit>
                <button>Login</button>
              </Div>
              <Div check>
                <Div input>
                  <input type="checkbox" />
                  Remember Me
                </Div>
                <a href="/"> Forgot Password?</a>
              </Div>
            </Form>
          </Col>
          <Col span={12}>
            <Div image_con>
              <img src={bg} alt="" height={750} />
            </Div>
          </Col>
        </Row>
      </Div>
    </>
  );
};

export default Hero;
