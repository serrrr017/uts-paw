import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import PesanKosong from './PesanKosong.jsx'

afterEach(cleanup)

describe('PesanKosong', () => {
  it('menampilkan pesan bawaan', () => {
    render(<PesanKosong />)
    expect(screen.getByText('Belum ada buku di rak.')).toBeTruthy()
  })

  it('menampilkan pesan khusus dari props', () => {
    render(<PesanKosong pesan="Buku tidak ditemukan." />)
    expect(screen.getByText('Buku tidak ditemukan.')).toBeTruthy()
  })

  it('memakai role status agar terbaca pembaca layar', () => {
    render(<PesanKosong />)
    expect(screen.getByRole('status')).toBeTruthy()
  })
})
