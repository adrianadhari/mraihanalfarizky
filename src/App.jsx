import Countdown from "./Countdown";

const App = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url('backgroundd.jpg')" }}
        className="bg-cover bg-no-repeat max-w-full flex flex-col gap-3 items-center justify-center min-h-screen"
      >
        <p className="text-4xl ">
          Undangan <br />
          Syukuran Khitan
        </p>
        <div className="px-20 w-full">
          <img src="hero.png" className="w-full" />
        </div>
        <p className="text-4xl ">Muhammad Raihan Alfarizky</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Assalamualaikum Wr. Wb.</h2>
          <p className="mb-3">
            Dengan Rahmat Allah yang Maha Kuasa Insha Allah kami akan
            melangsungkan Syukuran Khitan
          </p>
          <Countdown />
        </div>

        <div className="p-6 shadow border-2 text-center flex flex-col items-center justify-center gap-3">
          <img src="hero.png" className="w-2/4" />
          <p className="text-xl font-semibold">Muhammad Raihan Alfarizky</p>
          <p>
            Putra dari <span className="font-semibold">Bpk. Endra</span> dan{" "}
            <span className="font-semibold">Ibu Kiki</span>
          </p>
          <p className="text-justify">
            Muhammad Raihan Alfarizky merupakan anak kedua kami akan segera
            melaksanakan khitan. Maka dari itu, kami ingin mengadakan syukuran
            atas acara tersebut dengan tujuan memanjatkan rasa terima kasih kami
            kepada yang maha kuasa serta berharap bahwa anak kami kelak menjadi
            anak yang bermanfaat bagi dirinya, agama, dan bangsa Indonesia.
          </p>
        </div>

        <div className="mt-10 text-center space-y-2 mb-5">
          <h2 className="text-3xl font-bold">Undangan dan Acara</h2>
          <p>Bahagia rasanya apabila anda berkenan hadir dan memberikan doa</p>
        </div>
        <div className="border-2 shadow p-6 flex flex-col items-center">
          <p className="font-medium">Khitanan dan Syukuran</p>
          <div className="border w-11/12"></div>
          <p className="font-bold text-2xl">08:00 - selesai</p>
          <p>Selasa, 20 Agustus 2024</p>
          <p className="text-center">
            Kp. Parung Aleng Tegal RT.001/RW.003 Desa Cikeas Kec. Sukaraja Kab.
            Bogor | Patokan Seberang Indomaret
          </p>
        </div>

        <div className="mt-10 text-center mb-5">
          <h2 className="text-3xl font-bold">Peta Lokasi</h2>
          <p className="mb-5">
            Anda dapat menuju lokasi acara kami dengan bantuan peta dibawah ini.
            Atau klik tombol di bawah ini
          </p>
          <a
            href="https://maps.app.goo.gl/wc2uYQHZhuQfAvk69"
            target="_blank"
            className="p-3 text-white bg-[#ECB888]"
          >
            Buka Di Google Maps
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.72121065111395!2d106.84927083829474!3d-6.579664293553205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1723535054999!5m2!1sen!2sid"
            width="330"
            height="600"
            className="border-0 mx-auto my-10"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-10 text-center mb-5">
          <h2 className="text-3xl font-bold">Kado Khitan</h2>
          <p className="mb-5">
            Jika teman-teman ada yang berkenan untuk mengirimkan tanda kasih
            kepada anak kami Raihan, silakan kirim melalui rekening: Bank
            Permata atas nama RIZKI SEPTIANI
          </p>
          <img src="permata-bank.jpg" alt="" />
          <div>
            <p className="font-medium">Nama Bank</p>
            <p>Permata</p>
          </div>
          <div>
            <p className="font-medium">Nomor Rekening</p>
            <p>1239228298 a/n RIZKI SEPTIANI</p>
          </div>
          <p>
            Atau jika berkenan mengirimkan hadiah berupa kado fisik, anda dapat
            mengirimkannya pada alamat rumah kami di Kp. Parung Aleng Tegal
            RT.001/RW.003 Desa Cikeas Kec. Sukaraja Kab. Bogor | Patokan
            Seberang Indomare
          </p>
        </div>

        <div className="mt-10 text-center mb-5">
          <h2 className="text-3xl font-bold">Doa dan Ucapan</h2>
          <p className="mb-5">
            Tuliskan sesuatu ucapan berupa harapan ataupun doa
          </p>
          <div>
            <form action="" method="POST">
              <div className="flex flex-col space-y-4 items-center ">
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Tulis nama anda"
                  required
                  className="w-full border rounded-xl p-3"
                />
                <input
                  type="text"
                  name="alamat"
                  id="alamat"
                  placeholder="Tulis alamat tinggal anda"
                  required
                  className="w-full border rounded-xl p-3"
                />
                <textarea
                  name="pesan"
                  id="pesan"
                  placeholder="Tuliskan ucapan atau doa"
                  required
                  className="w-full border rounded-xl p-3"
                ></textarea>
                <button
                  type="submit"
                  className="text-white bg w-full p-3 my-3 bg-[#ECB888]"
                >
                  KIRIM
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 text-center mb-5">
          <h2 className="text-3xl font-bold">Doa dan Ucapan</h2>
        </div>
        <div className="border-2 shadow p-6 flex flex-col items-center">
          <p className="font-medium">Adrian - Bogor</p>
          <div className="border w-11/12"></div>
          <p>Selamat!!</p>
          <p className="text-center">Rabu, 14 Agustus 2024 20:00 WIB</p>
        </div>
      </div>
    </>
  );
};

export default App;
