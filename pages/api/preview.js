export default function headler(req, res) {
  const key = 'BIRDMAN';
  if (req.query.key !== key) res.status(401).json({ message: 'Invalid key' });

  res.setPreviewData({});
  res.writeHead(307, { location: '/' });
  return res.end();
}
