import React, { useState, useEffect } from "react";
import "./component/CommonComponent/Menu/Menu.scss";

const NotesListPage = () => {
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("/api/btns/");
    const data = await response.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div className="menu">
      {notes.map((note, index) => (
        <view>
          <h3 key={index}>{note.btnName}</h3>
        </view>
      ))}
    </div>
  );
};

export default NotesListPage;
