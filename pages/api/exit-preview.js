export default function headler(req, res) {
  res.clearPreviewData();
  res.writeHead(307, { location: '/' });
  return res.end();
}
