<?php

class Bid extends CI_Controller {
//     public function __construct()
//     {
//         parent::__construct();
//         $this->load->model('Berita_model');
//         $this->load->library('form_validation');
//     }

    // public function index()
    // {
    //     $data['judul'] = "Berita XDA";
    //     $data['berita'] = $this->Berita_model->getAllBerita();
    //     if ( $this->input->post('keyword') ) {
    //         $data['berita'] = $this->Berita_model->cariBerita();
    //     }
    //     $this->load->view('layout/header');//', $data);
    //     $this->load->view('bid/index');//, $data);
    //     $this->load->view('layout/footer');
    // }

    // public function tambah()
    // {
    //     $data['judul'] = 'Form Tambah Berita';

    //     $this->form_validation->set_rules('headline', 'Headline', 'required');
    //     $this->form_validation->set_rules('newsbody', 'News Body', 'required');
        
    //     if ( $this->form_validation->run() == FALSE ) {
    //         $this->load->view('templates/header', $data);
    //         $this->load->view('berita/tambah');
    //         $this->load->view('templates/footer');
    //     } else {
    //         $this->Berita_model->tambahBerita();
    //         $this->session->set_flashdata('flash', 'Ditambahkan');
    //         redirect('berita');
    //     }
    // }

    // public function hapus($id_berita)
    // {
    //     $this->Berita_model->hapusBerita($id_berita);
    //     $this->session->set_flashdata('flash', 'Dihapus');
    //     redirect('berita');
    // }
    
    // public function detail($id_berita)
    // {
        // $data['judul'] = 'Detail Berita';
        // $data['berita'] = $this->Berita_model->getBeritaByIdBerita($id_berita);
        // $this->load->view('templates/header', $data);
        // $this->load->view('berita/detail', $data);
        // $this->load->view('templates/footer');

        // $this->Berita_model->hapusBerita($id_berita);
        // $this->session->set_flashdata('flash', 'Dihapus');
        // redirect('berita');
    // }

    // public function ubah($id_berita)
    // {
        // $data['judul'] = 'Form Ubah Berita';
        // $data['berita'] = $this->Berita_model->getBeritaByIdBerita($id_berita);
        // $data['merkhp'] = ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'Oppo', 'Vivo', 'Asus'];

        // $this->form_validation->set_rules('headline', 'Headline', 'required');
        // $this->form_validation->set_rules('newsbody', 'News Body', 'required');
        
        // if ( $this->form_validation->run() == FALSE ) {
        //     $this->load->view('templates/header', $data);
        //     $this->load->view('berita/ubah', $data);
        //     $this->load->view('templates/footer');
        // } else {
        //     $this->Berita_model->ubahBerita($id_berita);
        //     $this->session->set_flashdata('flash', 'Diubah');
        //     redirect('berita');
    //     }
    // }
}