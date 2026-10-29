import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import LencanaStatus from './LencanaStatus.jsx'

afterEach(cleanup)

describe('LencanaStatus', () => {
  it('menampilkan teks status', () => {
    render(<LencanaStatus status="Sedang dibaca" />)
    expect(screen.getByText('Sedang dibaca')).toBeTruthy()
  })

  it('memberi kelas lencana-selesai untuk status Selesai', () => {
    render(<LencanaStatus status="Selesai" />)
    expect(screen.getByText('Selesai').className).toContain('lencana-selesai')
  })

  it('tidak memberi kelas lencana-selesai untuk status lain', () => {
    render(<LencanaStatus status="Belum dibaca" />)
    expect(screen.getByText('Belum dibaca').className).not.toContain('lencana-selesai')
  })
})