export default function LencanaStatus({ status }) {
  const kelas = status === 'Selesai' ? 'lencana lencana-selesai' : 'lencana'
  return <span className={kelas}>{status}</span>
}