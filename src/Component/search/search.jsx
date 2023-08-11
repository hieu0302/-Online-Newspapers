import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../redux/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState("");

  const onClickButton = () => {
    navigate("/search", { replace: true });
    const updateNew = {
      text: type,
    };
    dispatch(updateSearch(updateNew));
    setType("");
  };

  return (
    <Form className="boxSearch">
      <Input
        onChange={(e) => setType(e.target.value)}
        value={type}
        placeholder="Nhập nội dung tìm kiếm..."
        style={{
          width: 300,
        }}
      />
      <Link to={"/search"}>
        <Button onClick={onClickButton} icon={<SearchOutlined />} />
      </Link>
    </Form>
  );
};

export default App;
