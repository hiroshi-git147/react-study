import { useCallback, useState } from "react";

export const useChange = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  // テキスト入力の変更を管理
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  // 配列に新しい項目を追加
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
