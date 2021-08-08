const bg = document.querySelector(".random_BG");

const bgList = [
    "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5xq2/image/YPT2uPrm1X8Q37LhapN4AzOxbFY.jpg",

    "https://t1.daumcdn.net/cfile/tistory/99EFE6375A65DFEA33",
];

const randNum = Math.floor(Math.random() * bgList.length);

bg.style.backgroundImage = `url(${bgList[randNum]})`;

