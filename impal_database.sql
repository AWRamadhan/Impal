-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2019 at 03:38 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `impal database`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` varchar(10) NOT NULL,
  `nama_admin` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` varchar(10) NOT NULL,
  `nama_barang` varchar(20) NOT NULL,
  `deskripsi_barang` text NOT NULL,
  `foto_barang` blob NOT NULL,
  `harga` int(11) NOT NULL,
  `id_pelelang` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kolektor`
--

CREATE TABLE `kolektor` (
  `id_kolektor` varchar(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lelang`
--

CREATE TABLE `lelang` (
  `id_lelang` varchar(10) NOT NULL,
  `nama_lelang` varchar(20) NOT NULL,
  `waktu_lelang` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `harga_akhir` int(11) NOT NULL,
  `id_kolektor` varchar(10) NOT NULL,
  `id_barang` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pelelang`
--

CREATE TABLE `pelelang` (
  `id_pelelang` varchar(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`),
  ADD KEY `id_barang_pelelang` (`id_pelelang`);

--
-- Indexes for table `kolektor`
--
ALTER TABLE `kolektor`
  ADD PRIMARY KEY (`id_kolektor`);

--
-- Indexes for table `lelang`
--
ALTER TABLE `lelang`
  ADD PRIMARY KEY (`id_lelang`),
  ADD KEY `id_lelang_barang` (`id_barang`),
  ADD KEY `id_lelang_kolektor` (`id_kolektor`);

--
-- Indexes for table `pelelang`
--
ALTER TABLE `pelelang`
  ADD PRIMARY KEY (`id_pelelang`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang`
--
ALTER TABLE `barang`
  ADD CONSTRAINT `id_barang_pelelang` FOREIGN KEY (`id_pelelang`) REFERENCES `pelelang` (`id_pelelang`);

--
-- Constraints for table `lelang`
--
ALTER TABLE `lelang`
  ADD CONSTRAINT `id_lelang_barang` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`),
  ADD CONSTRAINT `id_lelang_kolektor` FOREIGN KEY (`id_kolektor`) REFERENCES `kolektor` (`id_kolektor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
