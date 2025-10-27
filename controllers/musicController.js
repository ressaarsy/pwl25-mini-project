import {
  getAllMusicModel,
  getMusicByIdModel,
  createMusicModel,
  updateMusicModel,
  deleteMusicModel,
} from "../models/musicModel.js";

export const getAllMusic = (req, res, next) => {
  getAllMusicModel((err, results) => {
    if (err) return next(err);
    res.json(results);
  });
};

export const getMusicById = (req, res, next) => {
  getMusicByIdModel(req.params.id, (err, results) => {
    if (err) return next(err);
    if (results.length === 0) return res.status(404).json({ message: "Music not found" });
    res.json(results[0]);
  });
};

export const createMusic = (req, res, next) => {
  const { title, artist, region, youtube_url, duration, release_date } = req.body;
  const data = { title, artist, region, youtube_url, duration, release_date };

  createMusicModel(data, (err, result) => {
    if (err) return next(err);
    res.status(201).json({ message: "Musik berhasil ditambahkan!", id: result.insertId });
  });
};

export const updateMusic = (req, res, next) => {
  const { id } = req.params;
  const { title, artist, region, youtube_url, duration, release_date } = req.body;
  const data = { title, artist, region, youtube_url, duration, release_date };

  updateMusicModel(id, data, (err, result) => {
    if (err) return next(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Music tidak ditemukan" });
    res.json({ message: "Musik berhasil diperbarui!" });
  });
};

export const deleteMusic = (req, res, next) => {
  deleteMusicModel(req.params.id, (err, result) => {
    if (err) return next(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Music tidak ditemukan" });
    res.json({ message: "Musik berhasil dihapus!" });
  });
};
