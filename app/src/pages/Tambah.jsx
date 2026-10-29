import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Fiksi', penulis: '', tahun: '', status:'Belum dibaca' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tugas</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Fiksi</option>
        <option>Teknologi</option>
        <option>Pendidikan</option>
      </select>

      <label htmlFor="penulis">Penulis</label>
      <input id="penulis" name="penulis" value={form.penulis} onChange={ubah} />

      <label htmlFor="tahun">Tahun Terbit</label>
       <input
        id="tahun"
        name="tahun"
        type="number"
        value={form.tahun}
        onChange={ubah}
      />

     <label htmlFor="status">Status Baca</label>
      <select id="status" name="status" value={form.status} onChange={ubah}>
        <option>Belum Dibaca</option>
        <option>Sedang Dibaca</option>
        <option>Selesai</option>
      </select>
      
      <button type="submit">Simpan</button>
    </form>
  )
}