export default function PesanKosong({ pesan = 'Belum ada buku di rak.' }) {
  return <p role="status">{pesan}</p>
}
