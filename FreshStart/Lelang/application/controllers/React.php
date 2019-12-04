<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class React extends CI_Controller
{
    public function index()
    {
        $this->load->view('react_view');
    }
}