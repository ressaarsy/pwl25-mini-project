import db from "../config/db.js";

export const getAllMusicModel = (callback) => {
  db.query("SELECT * FROM music", callback);
};

export const getMusicByIdModel = (id, callback) => {
  db.query("SELECT * FROM music WHERE id = ?", [id], callback);
};

export const createMusicModel = (data, callback) => {
  const sql = "INSERT INTO music (title, artist, region, youtube_url, duration, release_date) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [data.title, data.artist, data.region, data.youtube_url, data.duration, data.release_date], callback);
};

export const updateMusicModel = (id, data, callback) => {
  const sql = "UPDATE music SET title=?, artist=?, region=?, youtube_url=?, duration=?, release_date=? WHERE id=?";
  db.query(sql, [data.title, data.artist, data.region, data.youtube_url, data.duration, data.release_date, id], callback);
};

export const deleteMusicModel = (id, callback) => {
  db.query("DELETE FROM music WHERE id = ?", [id], callback);
};
