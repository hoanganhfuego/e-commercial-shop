const data = [
        {
            id: 0,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 4000,
            img: "https://product.hstatic.net/200000018774/product/2_82931aee3bb34ef3b8754e025a9e8858.jpg",
            status: "new",
            category: "tshirt"
        },
        {
            id: 1,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 4000,
            img: "https://product.hstatic.net/200000018774/product/3_41c3114c6fdd4c74af3ba937b3644c04.jpg",
            status: "sale",
            category: "tshirt"
        },{
            id: 2,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 4000,
            img: "https://product.hstatic.net/200000018774/product/4_db1fb238f56d4e8eb8035a5c1b5836b8.jpg",
            status: "sale",
            category: "tshirt"
        },{
            id: 3,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 4000,
            img: "https://product.hstatic.net/200000018774/product/1_5a1127e8918742f69d05acea2b7bb364.jpg",
            status: "sale",
            category: "tshirt"
        },{
            id: 4,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 3500,
            img: "https://product.hstatic.net/200000018774/product/4_1999516319a94aea917bc590916a0010.jpg",
            status: "sale",
            category: "tshirt"
        },{
            id: 5,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 3500,
            img: "https://product.hstatic.net/200000018774/product/3_3debde2708e449a2a74daa6e67b2ef21.jpg",
            status: "sale",
            category: "tshirt"
        },{
            id: 6,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 3500,
            img: "https://product.hstatic.net/200000018774/product/2_c7798c1c1d0645eea73aa381948cc6cb.jpg",
            status: "sale",
            category: "tshirt"
        },{
            id: 7,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 5000,
            img: "https://product.hstatic.net/200000018774/product/15_df098a881fc14c9f9c8f25aca20c1017.jpg",
            status: "sale",
            category: "tshirt"
        },
        {
            id: 8,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 5300,
            img: "https://product.hstatic.net/200000018774/product/12_4c0d4b85f13e4531a5c970000201516b.jpg",
            status: "new",
            category: "tshirt"
        },
        {
            id: 9,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 5000,
            img: "https://product.hstatic.net/200000018774/product/5_5b8ccf95679e421f9944c521c96309b1.jpg",
            status: "sale",
            category: "tshirt"
        },
        {
            id: 10,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 5100,
            img: "https://product.hstatic.net/200000018774/product/4_7060d4adb602405292596221796d6391.jpg",
            category: "tshirt"
        },
        {
            id: 11,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 4800,
            img: "https://product.hstatic.net/200000018774/product/1_cb7091bf0ea64cb890f7b8613a6c22a0.jpg",
            status: "sale",
            category: "tshirt"
        },
        {
            id: 12,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 4800,
            img: "https://product.hstatic.net/200000018774/product/2_c26cc62606594c09b2a9fd87410df545.jpg",
            category: "tshirt"
        },
        {
            id: 13,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 4800,
            img: "https://product.hstatic.net/200000018774/product/2_e3aa95a4e06f48e4b56f1a5c54ac2a0b.jpg",
            category: "tshirt"
        },
        {
            id: 14,
            name: "CHARCOAL ARCADEGAME TEE",
            price: 4800,
            img: "https://product.hstatic.net/200000018774/product/3_2cae00713a154595b82455335981feca.jpg",
            category: "tshirt"
        },
        {
            id: 15,
            status: 'new',
            name: "lazy7",
            price: 3500,
            img: "https://product.hstatic.net/200000018774/product/76_b92c3079ba7e441292db95cf0b4424cf.jpg",
            category: "short"
        },
        {
            id: 16,
            name: "lazy7",
            price: 3500,
            img: "https://product.hstatic.net/200000018774/product/74_5a69af5917eb4f0591cc6f7782877f67.jpg",
            category: "short"
        },
        {
            id: 17,
            name: "lazy7",
            price: 3500,
            img: "https://product.hstatic.net/200000018774/product/79_8bc67eae03a74ee5873ac2518bceeca6.jpg",
            category: "short"
        },
        {
            id: 18,
            name: "REGULAR TAPERED JEANS",
            price: 5500,
            img: "https://product.hstatic.net/200000018774/product/154_07b30dc3f36940a88bdee9038012152b.jpg",
            category: "jean"
        },
        {
            id: 19,
            name: "REGULAR TAPERED JEANS",
            price: 5500,
            img: "https://product.hstatic.net/200000018774/product/151_26c90bc399ce4e85b1771546a581513d.jpg",
            category: "jean"
        },
        {
            id: 20,
            name: "REGULAR TAPERED JEANS",
            price: 5500,
            img: "https://product.hstatic.net/200000018774/product/148_64e49653f96b497fa36266f5e337ad24.jpg",
            category: "jean"
        },
        {
            id: 21,
            name: "REGULAR TAPERED JEANS",
            price: 5500,
            img: "https://product.hstatic.net/200000018774/product/144_77cd35dfa0364b7f9a61bb1d50371628.jpg",
            category: "jean"
        },
        {
            id: 22,
            name: "REGULAR TAPERED JEANS",
            price: 5500,
            img: "https://product.hstatic.net/200000018774/product/138_3c646e3b1b174a05919c46aeca560a3a.jpg",
            category: "jean"
        },
        {
            id: 23,
            name: "REGULAR TAPERED JEANS",
            price: 5500,
            img: "https://product.hstatic.net/200000018774/product/31_507a70b2aafb4bfebc00f0dc4d50bb20.jpg",
            category: "jean"
        },
        {
            id: 24,
            name: "BASEBALL VARSITY JACKET",
            price: 19500,
            img: "https://product.hstatic.net/200000018774/product/35_b02ae8678e0847f7bae23e06d97deb10.jpg",
            category: "shirt"
        },
        {
            id: 25,
            name: "BASEBALL VARSITY JACKET",
            price: 19500,
            img: "	https://product.hstatic.net/200000018774/product/31_507a70b2aafb4bfebc00f0dc4d50bb20.jpg",
            category: "shirt"
        },
        {
            id: 26,
            name: "2 TONE HALFZIP GREY",
            price: 5000,
            img: "	https://product.hstatic.net/200000018774/product/155_52d515fa06a747f38aa6b4a74b0438ff.jpg",
            category: "shirt"
        },
        {
            id: 27,
            name: "2 TONE HALFZIP GREY",
            price: 5000,
            img: "https://product.hstatic.net/200000018774/product/38_ee691068c9c9409da7ee622e2d7719a0.jpg",
            category: "shirt"
        },
        {
            id: 28,
            name: "2 TONE HALFZIP GREY",
            price: 5000,
            img: "https://product.hstatic.net/200000018774/product/37_6c42681b562a4240b2f7d2e8d68cc33b.jpg",
            category: "shirt"
        },
        {
            id: 29,
            name: "2 TONE HALFZIP GREY",
            price: 5000,
            img: "https://product.hstatic.net/200000018774/product/42_75917d986ba046ee889c246451141d6e.jpg",
            category: "shirt"
        },
        {
            id: 30,
            name: "SKULL SWEATSHIRT",
            price: 4500,
            img: "	https://product.hstatic.net/200000018774/product/48_9ebf656afd39459b9e1c69bdd60d8ca4.jpg",
            category: "shirt"
        },
        {
            id: 31,
            name: "SKULL SWEATSHIRT",
            price: 4500,
            img: "	https://product.hstatic.net/200000018774/product/64_b6d0782f64824338924b054a996510aa.jpg",
            category: "shirt"
        },
        {
            id: 32,
            name: "SKULL SWEATSHIRT",
            price: 4500,
            img: "https://product.hstatic.net/200000018774/product/70_04a68ae0731446a5888c6e0e17afb426.jpg",
            category: "shirt"
        }
    ]

    export default data;