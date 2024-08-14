import { useRef } from "react";
import Countdown from "./Countdown";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        "https://cendekiapos.adrianadhari.my.id/api/messages"
      );
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error("Terjadi kesalahan saat mengambil data");
      }
    } catch (error) {
      console.error("Kesalahan:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const audio = audioRef.current;
      if (audio && audio.paused) {
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Musik mulai diputar
              window.removeEventListener("scroll", handleScroll); // Hapus event listener setelah musik diputar
            })
            .catch((error) => {
              console.log("Autoplay diblokir oleh browser:", error);
            });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Hapus event listener saat komponen di-unmount
    };
  }, []);

  const copyText = () => {
    navigator.clipboard.writeText("1239228298");
  };

  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://cendekiapos.adrianadhari.my.id/api/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Refresh messages after successful submission
        fetchMessages();
        setFormData({
          nama: "",
          alamat: "",
          pesan: "",
        });
      } else {
        console.error("Terjadi kesalahan saat mengirim pesan");
      }
    } catch (error) {
      console.error("Kesalahan:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="deenassalam.mp3" loop />

      {/* Hero */}
      <div
        style={{ backgroundImage: "url('background.png')" }}
        className="bg-cover bg-no-repeat"
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-3xl text-center text-[#B0835C] font-medium">
            <span className="font-fakodi">Undangan</span> <br />
            Syukuran Khitan
          </p>
          <div className="px-20 my-6 w-full">
            <img src="hero.png" className="w-full" />
          </div>
          <p className="text-base text-[#B0835C] font-medium  text-center">
            Muhammad Raihan Alfarizky
          </p>
        </div>
      </div>
      {/* Hero */}

      <div className="container mx-auto px-4 py-10">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold ">Assalamualaikum Wr. Wb.</h2>
          <p>
            Dengan Rahmat Allah yang Maha Kuasa Insha Allah kami akan
            melangsungkan Syukuran Khitan
          </p>
          <Countdown />
        </div>

        {/* Pembukaan */}
        <div className="p-6 shadow border rounded-xl text-center flex flex-col items-center justify-center space-y-4 mb-20">
          <img src="hero.png" className="w-2/4" />
          <div>
            <p className="text-lg font-semibold">Muhammad Raihan Alfarizky</p>
            <p className="text-base">
              Putra dari <span className="font-semibold">Bpk. Endra</span> dan{" "}
              <span className="font-semibold">Ibu Kiki</span>
            </p>
          </div>
          <p className="text-justify text-sm leading-relaxed">
            Muhammad Raihan Alfarizky merupakan anak kedua kami akan segera
            melaksanakan khitan. Maka dari itu, kami ingin mengadakan syukuran
            atas acara tersebut dengan tujuan memanjatkan rasa terima kasih kami
            kepada yang maha kuasa serta berharap bahwa anak kami kelak menjadi
            anak yang bermanfaat bagi dirinya, agama, dan bangsa Indonesia.
          </p>
        </div>
        {/* Pembukaan */}

        {/* Tempat dan Waktu */}
        <div className="mb-20">
          <div className="text-center space-y-2 mb-5">
            <h2 className="text-3xl font-bold">Tempat dan Waktu</h2>
            <p>
              Bahagia rasanya apabila anda berkenan hadir dan memberikan doa
            </p>
          </div>
          <div className="text-center p-6 shadow border rounded-xl flex flex-col items-center space-y-4">
            <div>
              <p className="text-xl font-semibold">Selasa, 20 Agustus 2024</p>
              <p className="font-semibold text-xl">08:00 s/d selesai</p>
            </div>
            <p className="text-sm">
              Kp. Parung Aleng Tegal RT.001/RW.003 Desa Cikeas Kec. Sukaraja
              Kab. Bogor | Patokan Seberang Indomaret
            </p>
          </div>
        </div>
        {/* Tempat dan Waktu */}

        {/* Peta Lokasi */}
        <div className="text-center mb-20">
          <div className="space-y-2 mb-5">
            <h2 className="text-3xl font-bold">Peta Lokasi</h2>
            <p>
              Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah
              ini. Atau klik tombol di bawah ini.
            </p>
          </div>
          <div>
            <a
              href="https://maps.app.goo.gl/wc2uYQHZhuQfAvk69"
              target="_blank"
              className="p-3 text-white bg-[#ed9a4d]"
            >
              Buka Di Google Maps
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.72121065111395!2d106.84927083829474!3d-6.579664293553205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1723535054999!5m2!1sen!2sid"
            width="330"
            height="600"
            className="border-0 mx-auto my-10"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Peta Lokasi */}

        {/* Kado */}
        <div className="text-center mb-20">
          <div className="space-y-2 mb-5">
            <h2 className="text-3xl font-bold">Kado Khitan</h2>
            <p>
              Jika teman-teman ada yang berkenan untuk mengirimkan tanda kasih
              kepada anak kami Raihan, silakan kirim melalui rekening dibawah
              ini:
            </p>
          </div>
          <div className="p-6 rounded-xl border shadow space-y-4 mb-7">
            <img src="permata-bank.jpg" alt="" className="w-full" />
            <p className="font-semibold text-lg">
              1239228298 a/n RIZKI SEPTIANI
            </p>
            <button
              onClick={copyText}
              className="p-3 bg-[#ed9a4d] text-white focus:bg-[#d9a571]"
            >
              Salin Nomor Rekening
            </button>
          </div>
          <p>
            Atau jika berkenan mengirimkan hadiah berupa kado fisik, anda dapat
            mengirimkannya pada alamat rumah kami di{" "}
            <span className="font-semibold">
              Kp. Parung Aleng Tegal RT.001/RW.003 Desa Cikeas Kec. Sukaraja
              Kab. Bogor | Patokan Seberang Indomaret
            </span>
          </p>
        </div>
        {/* Kado */}

        {/* Doa dan Ucapan */}
        <div className="text-center mb-20">
          <div className="space-y-2 mb-5">
            <h2 className="text-3xl font-bold">Doa dan Ucapan</h2>
            <p className="mb-5">
              Tuliskan sesuatu ucapan berupa harapan ataupun doa
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} method="POST">
              <div className="flex flex-col space-y-4 items-center ">
                <input
                  name="nama"
                  type="text"
                  placeholder="Tulis nama anda"
                  required
                  className="w-full border rounded-lg p-3"
                  value={formData.nama}
                  onChange={handleChange}
                />
                <input
                  name="alamat"
                  type="text"
                  placeholder="Tulis alamat tinggal anda"
                  required
                  className="w-full border rounded-lg p-3"
                  value={formData.alamat}
                  onChange={handleChange}
                />
                <textarea
                  name="pesan"
                  placeholder="Tuliskan ucapan atau doa"
                  required
                  className="w-full border rounded-lg p-3"
                  value={formData.pesan}
                  onChange={handleChange}
                ></textarea>
                <button
                  type="submit"
                  className="text-white w-full p-3 my-3 rounded-lg bg-[#ed9a4d]"
                >
                  KIRIM
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Doa dan Ucapan */}

        {messages.map((message) => (
          <div
            key={message.id}
            className="border shadow p-6 rounded-xl flex flex-col items-center space-y-2 mb-10"
          >
            <p className="font-semibold">
              {message.nama} - {message.alamat}
            </p>
            <div className="border w-11/12"></div>
            <p>{message.pesan}</p>
            <p className="text-center">
              {new Date(message.created_at).toLocaleString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}{" "}
              WIB
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
