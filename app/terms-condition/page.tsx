import Foo from "../../components/Foo"
import Accordion from "../../components/Accor"
const About = () => {
    return (
        <>
            <div className="max-w-3xl mx-auto px-8 grid place-content-center gap-8 tracking-wider leading-relaxed">
                <h1 className="text-3xl md:text-4xl w-full font-bold mt-24">
                    Terms & Condition
                </h1>
                <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                    Kondisi Syarat & Ketentuan. Berikut ini adalah syarat &
                    ketentuan yang dibuat demi kebaikan bersama.
                </h2>
                <div className="p-4">
                    <p className="mb-4">
                        Kami akan mulai mengerjakan website ketika customer
                        sudah melakukan pembayaran uang muka (DP) sebesar 50%.
                        Sisanya dibayarkan setelah website selesai dikerjakan.
                    </p>

                    <p className="mb-4">
                        Lakukan pemesanan di platform whatsapp, pembayaran
                        secara tunai atau down payment (DP) minimal 50%. Hanya
                        <span className="text-mediumSpringGreen">
                            transfer tunai ke rekening BCA atas nama Eko Purnomo
                        </span>{" "}
                        Atau{" "}
                        <span className="text-mediumSpringGreen">Gopay</span>.{" "}
                        *Catatan: dalam beberapa kondisi, misalnya sedang
                        mengerjakan atau banyak pemesanan. Mungkin membutuhkan
                        waktu untuk mendapatkan respons. Tunggu paling lama
                        1x24jam untuk respon dari kami.
                    </p>

                    <ul className="list-disc pl-4">
                        <li className="mb-2">
                            Materi website tidak boleh mengandung unsur
                            pornografi, perjudian, money game atau unsur yang
                            melanggar hukum lainnya.
                        </li>
                        <li className="mb-2">
                            Logo yang sudah termasuk dalam harga pembuatan
                            adalah logo standar. (Jika perlukan)
                        </li>
                        <li className="mb-2">
                            Selesai dalam 1-5 hari kerja dengan maksimal
                            pengerjaan seminggu kecuali website custom dengan
                            masa perbaikan selama 7 hari.
                        </li>
                        <li className="mb-2">
                            Harga sudah termasuk domain dan hosting untuk 1
                            tahun/bulan sesuai paket yang dipilih.
                        </li>
                        <li className="mb-2">
                            Tahun berikutnya cukup membayar Rp 299.000 (50%)
                            untuk perpanjangan domain dan hosting paket BASIC
                            tahunan. Rp 99.000 (50%) untuk paket BASIC bulanan.
                            Rp 399.000 (80%) untuk paket SUPER. Rp 149.000 (50%)
                            untuk paket CUSTOM bulanan. Rp 499.000 (50%) untuk
                            pake CUSTOM tahunan. Harga bisa berubah
                            sewaktu-waktu tergantung harga dari penyedia jasa
                            hosting.
                        </li>
                        <li className="mb-2">
                            Jika anda sudah mempunyai domain dan hosting, maka
                            anda cukup mengurangi harga pembuatan website
                            sebesar Rp.100.000
                        </li>
                        <li className="mb-2">
                            Layanan tidak mencakup pembuatan script yang
                            bersifat pemrograman.
                        </li>
                        <li className="mb-2">
                            Syarat dan ketentuan ini dibuat demi kebaikan
                            bersama. Dengan memesan jasa kami, berarti anda
                            setuju pada syarat dan ketentuan di atas.
                        </li>
                    </ul>
                </div>
                <a
                    id="konversi_konsultasi_web"
                    href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                    className="block text-md rounded bg-springGreen text-snow text-center font-bold px-4 py-2"
                >
                    Order Sekarang
                </a>

                <h2
                    id="faq"
                    className="text-3xl md:text-4xl w-full font-bold mt-24"
                >
                    FAQs
                </h2>
                <h2 className="text-2xl md:text-3xl w-full font-bold lg:mb-4">
                    Frequently Asked Questions. Pertanyaan yang paling banyak
                    ditanyakan dan mungkin menjawab pertanyaan kamu.
                </h2>

                <div className="p-4">
                    <div className="accordion">
                        <Accordion
                            title="Apa itu VArtz jasa pembuatan web? 👋"
                            content="merupakan personil jasa yang menyediakan
                                berbagai macam layanan IT mulai dari Pembuatan
                                Website seperti toko online, company profile,
                                portofiolio, personal dan lainnya, Pengembangan
                                Aplikasi lengkap disertai pemeliharaan atau
                                maintenance berkala."
                        />
                        <Accordion
                            title="Jasa pembuatan termasuk pembuatan apa saja?"
                            content="
                                Secara umum layanan berlangganan sudah termasuk
                                biaya HAKI (Hak Kekayaan Intelektual), desain, copy advices, developemnt (pembuatan), nama domain, hosting/server,
                                optimasi mobile, optimasi SEO (agar website Anda
                                masuk ke mesin pencarian), pengoperasian dan
                                pemeliharaan."
                        />
                        <Accordion
                            title="Data apa saja yang perlu saya sediakan? 🤟"
                            content="Hal pertama dan utama adalah konten situs web. Ini semua teks, paragraf, gambar, halaman, dan daftar semua fungsi yang Anda perlukan (formulir kontak, feed Instagram).

Selanjutnya, saya memerlukan aset merek apa pun seperti logo, kode warna, dan font. Tidak apa-apa jika Anda tidak memilikinya karena beberapa organisasi nirlaba yang memulai belum memilikinya. Dalam hal ini, tunjukkan beberapa warna yang Anda suka dan kami dapat membuat merek/rasa untuk situs tersebut."
                        />
                        <Accordion
                            title="Apakah ada garansi?"
                            content="Kami tumbuh ketika usaha Anda sukses. Garansi
                                sudah kami sertakan dalam setiap paket pembuatan
                                web ini, dan kami siap membantu untuk melakukan
                                perbaikan gratis ketika terjadi website “error”."
                        />
                        <Accordion
                            title="Metode pembayaran apa sajakah yang tersedia?"
                            content="Transfer Rekening BCA atau Gopay. Nomor akan dikirim setelah melakukan pemesanan."
                        />
                        <Accordion
                            title="Melayani ekstensi kebutuhan situs?"
                            content="Ya, Kami menerima berbagai macam ekstensi tambahan situs untuk Anda. Misalnya, mendaftarkan situs ke google search console, memambahkan opengraph meta untuk socmed/wa, dll. *beberapa ekstensi dikenai biaya tambahan."
                        />
                        <Accordion
                            title="Bagaimana saya dapat mengembangkan bisnis
                                    saya?"
                            content="Kami tumbuh bersama usaha Anda. Anda dapat
                                membaca blog milik kami yang selalu update dan
                                relevan dengan perkembagan zaman. Tentu anda
                                akan mendapatkan ilmu yang banyak dari sana dan
                                selamat membaca! (Jika anda menggunakan jasa
                                VArtz, secara otomatis anda akan terdaftar di
                                blog 😀)"
                        />
                        <Accordion
                            title="Bisakah saya melakukan slicing desain?"
                            content="Tentu Boleh. Jika anda memiliki desain dalam bentuk PDF atau figma files, dengan senang hati kami akan melakukan slicing desain ke HTML CSS untuk kamu. Biaya dapat dikurangi dengan 50ribu!"
                        />
                        <Accordion
                            title="Bisakah saya menggunakan template sendiri?"
                            content="Jika Anda sudah mempunyai template sendiri,
                                silakan kirimkan kepada kami. Dengan senang hati
                                kami akan mengeditkan dan menguploadnya untuk
                                Anda. Biaya dikurangi 50ribu!"
                        />
                        <Accordion
                            title="Maintenance apa saja yang termasuk dalam
                                    paket di atas? 🤖"
                            content="Maintenance yang kami lakukan yaitu memastikan
                                website tidak down dan tidak kena hack."
                        />
                        <Accordion
                            title="Ada pertanyaan lain?"
                            content="Jangan sungkan untuk tanya kepada kami! silahkan lakukan konsultasi dibawah ini. 100% GRATIS. Kami akan selalu mencari SOLUSI untuk bisnis anda!"
                        />
                    </div>
                </div>

                <a
                    id="konversi_konsultasi_web"
                    href="https://wa.me/6289611905599?text=Hai%20min,%20bisa%20konsultasi%20buat%20website?"
                    className="block text-md rounded bg-springGreen text-snow text-center font-bold px-4 py-2"
                >
                    Konsultasi Gratis
                </a>
                <a
                    id="konversi_konsultasi_web"
                    href="https://wa.me/6289611905599?text=Hai,%20min.%20Saya%20berminat%20untuk%20membuat%20website.%20Berikut%20ini%20adalah%20data%20saya%3A%0A%0ANama%3A%0ABidang%20Usaha%3A%0A%0A%28Mohon%20isi%20data%20di%20atas%20lalu%20kirim%29"
                    className="block text-md rounded bg-springGreen text-snow text-center font-bold px-4 py-2"
                >
                    Order Sekarang
                </a>
            </div>
            <Foo />
        </>
    )
}

export default About
