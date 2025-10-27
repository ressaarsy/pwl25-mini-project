const validate = (req, res, next) => {
  const { title, artist, region, youtube_url, duration, release_date } = req.body;

  if (!title || !artist || !region || !youtube_url || !duration || !release_date) {
    return res.status(400).json({ message: "Semua field wajib diisi!" });
  }

  next();
};

export default validate;
