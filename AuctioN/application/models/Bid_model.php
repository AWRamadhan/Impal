<?php

class Bid_model extends CI_model {
    public function getAllBerita()
    {
        return $this->db->get('berita')->result_array();
    }

    public function tambahBerita()
    {
        date_default_timezone_set('Asia/Jakarta');
        $data = [
            "headline" => $this->input->post('headline', true),
            "newsbody" => $this->input->post('newsbody', true),
            "merkhp" => $this->input->post('merkhp', true),
            "newstime" => Date("d-m-Y, H:i:s")
        ];

        $this->db->insert('berita', $data);
    }

    public function hapusBerita($id_berita)
    {
        // $this->db->where('id_berita', $id_berita);
        $this->db->delete('berita', ['id_berita' => $id_berita]);
    }

    public function getBeritaByIdBerita($id_berita)
    {
        return $this->db->get_where('berita', ['id_berita' => $id_berita])->row_array();
    }

    public function ubahBerita()
    {
        $data = [
            "headline" => $this->input->post('headline', true),
            "newsbody" => $this->input->post('newsbody', true),
            "merkhp" => $this->input->post('merkhp', true)
        ];

        $this->db->where('id_berita', $this->input->post('id'));
        $this->db->update('berita', $data);
    }

    public function cariBerita() 
    {
        $keyword = $this->input->post('keyword', true);
        $this->db->like('headline', $keyword);
        $this->db->or_like('newsbody', $keyword);
        $this->db->or_like('merkhp', $keyword);
        return $this->db->get('berita')->result_array();
    }
}