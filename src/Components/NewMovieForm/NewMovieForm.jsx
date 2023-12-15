import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewMovieForm = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [runningtime, setRunningTime] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      runningtime,
      genre,
    };
    try {
      const response = await axios.post(
        "https://localhost:7276/api/movies",
        formData
      );
      if (response.status === 201) {
        onNewMovie();
      }
    } catch (error) {
      console.warn("Error Submitting new movie form: ");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex item">
      <h4>Add Movie</h4>
      <div className="p-2">

      <TextField label="Title" value={title} onChange={setTitle} />
      <TextField
        label="Running Time"
        value={runningtime}
        onChange={setRunningTime}
        />
      <TextField label="Genre" value={genre} onChange={setGenre} />
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" type="submit">Add Movie</button>
        </div>
      </div>
    </form>
  );
};

export default NewMovieForm;
