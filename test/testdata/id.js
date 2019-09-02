module.exports = {
    fields: [
        {
            name: 'title',
            config: { boost: 10 }
        }, {
            name: 'body'
        }
    ],
    documents: [
        {
            "title": "Kontribusi Pemetaan",
            "body": "Anda dapat memberikan kontribusi yang berdampak sangat besar hanya dengan koneksi internet dan kemampuan dasar pengoperasian komputer, bahkan saat Anda sendiri tidak tinggal di daerah yang ingin Anda bantu petakan. Gunakan citra satelit untuk menandai jalanan, bangunan, lahan, dan titik-titik tertentu yang terukur dan Anda bisa menambahkan beragam informasi terkait yang Anda ketahui secara pasti. Data dan peta hasil pemetaan ini akan sangat berguna bagi komunitas dan masyarakat di wilayah tersebut untuk tujuan pengembagan dan kemanusiaan.",
            "id": 1
        }, {
            "title": "Survei Pemetaan Pemerintah",
            "body": "Kegiatan survei dan pemetaan setelah kemerdekaan Indonesia dilaksanakan atas dasar Peraturan Pemerintah Nomor 71 Tahun 1951 tentang Pembentukan Dewan dan Direktorium Pengukuran dan Penggambaran Peta.",
            "id": 2
        }, {
            "title": "Pembangunan Nasional",
            "body": "Dalam pembagian tugas Desurtanal tercantum inventerisasi sumber-sumber alam yang akan dipetakan dalam rangka menunjang pembangunan nasional.",
            "id": 3
        }
    ],
    tests: [
        {
            what: "find the word %w",
            search: "peta",
            found: 3
        }, {
            what: "find the word %w",
            search: "pemetaan",
            found: 2
        }, {
            what: "find the word %w",
            search: "peta*",
            found: 3
        }, {
            what: "never find a word that does not exist, like %w",
            search: "makan",
            found: 0
        }, {
            what: "never find a word that does not exist, like %w",
            search: "rumah",
            found: 0
        }, {
            what: "find a correctly stemmed word %w",
            search: "peta",
            found: 3
        }, {
            what: "find a correctly stemmed word %w",
            search: "laksana",
            found: 1
        }, {
            what: "find a correctly stemmed word %w",
            search: "atur",
            found: 1
        },  {
            what: "find a correctly stemmed word %w",
            search: "ukur",
            found: 2
        }, {
            what: "find a correctly stemmed word %w",
            search: "ukur*",
            found: 2
        }, 
    ]
}