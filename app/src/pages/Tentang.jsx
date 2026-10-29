import mahasiswa from '../../mahasiswa.json'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/serrrr017/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1>Tentang</h1>
      <dl>
        <dt>Sere Sri Rezeki Sinaga</dt>
        <dd>{nama}</dd>
        <dt>124140150</dt>
        <dd>{nim}</dd>
        <dt>RA</dt>
        <dd>{kelas}</dd>
        <dt>Rak Buku Pribadi</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}