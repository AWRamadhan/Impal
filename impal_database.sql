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
  `foto_barang` blob NULL,
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

--DDL END
--DML START

INSERT INTO admin ('1301111111','Wira','wiranata','123456789');
INSERT INTO admin ('1302222222','Annas','annaswahyu','123456789');
INSERT INTO admin ('1303333333','Vio','viosagara','123456789');
INSERT INTO admin ('1304444444','Vivin','alvinda','123456789')2
INSERT INTO admin ('1305555555','Ary','aryprasetyo','123456789');
INSERT INTO admin ('1306666666','rand','random','987654321');

INSERT INTO barang ('1001111111','Meja','Original dari produk pilihan di indonesia','','10000','2301111111');
INSERT INTO barang ('1002222222','Kursi','Original dari produk pilihan di indonesia','','10000','2302222222');
INSERT INTO barang ('1003333333','Rak','Original dari produk pilihan di indonesia','','10000','2303333333');
INSERT INTO barang ('1004444444','Lemari','Original dari produk pilihan di indonesia','','10000','2304444444');
INSERT INTO barang ('1005555555','Kasur','Original dari produk pilihan di indonesia','','10000','2305555555');
INSERT INTO barang ('1005555555','Lampu','Original dari produk pilihan di indonesia','','10000','2306666666');

INSERT INTO kolektor ('3301111111','wirana','123456789');
INSERT INTO kolektor ('3302222222','annaswa','123456789');
INSERT INTO kolektor ('3303333333','viosaga','123456789');
INSERT INTO kolektor ('3304444444','vinda','123456789');
INSERT INTO kolektor ('3305555555','arypras','123456789');
INSERT INTO kolektor ('3306666666','randoms','123456789');

INSERT INTO lelang ('1201111111','Lelang ','','10000','3301111111','1001111111');
INSERT INTO lelang ('1202222222','Lelang ','','10000','3302222222','1002222222');
INSERT INTO lelang ('1203333333','Lelang ','','10000','3303333333','1003333333');
INSERT INTO lelang ('1204444444','Lelang ','','10000','3304444444','1004444444');
INSERT INTO lelang ('1205555555','Lelang ','','10000','3305555555','1005555555');
INSERT INTO lelang ('1206666666','Lelang ','','10000','3306666666','1006666666');

INSERT INTO pelelang ('4301111111','wiran','123456789');
INSERT INTO pelelang ('4302222222','annasw','123456789');
INSERT INTO pelelang ('4303333333','viosag','123456789');
INSERT INTO pelelang ('4304444444','vind','123456789');
INSERT INTO pelelang ('4305555555','arypra','123456789');
INSERT INTO pelelang ('4306666666','rands','123456789');

SELECT * FROM admin;
SELECT * FROM barang;
SELECT * FROM kolektor;
SELECT * FROM lelang;
SELECT * FROM pelelang;
