const quotes = [
    {
        quote: "나의 행복이 세상에도 도움 된다는 것을 우리는 모르고 산다.",
        author: "로버트 루이스 스티븐슨"
    },
    {
        quote:"행복은 일로부터의 탈출이 아닌 몰입에서 나온다.",
        author: "토드 부크홀츠"
    },
    {
        quote: "마음의 기억력, 그것이 감사다.",
        author: "레몽 장"
    },
    {
        quote: "인간의 여러 자질 중 가장 핵심은 자기자신을 신뢰하고, 다른사람과의 신뢰를 쌓아가는 것이다.",
        author: "마하트마 간디"
    },
    {
        quote: "시간은 누구에게나 똑같이 주어지지만 어떻게 쓰느냐에 따라 우리의 성품과 행실이 달라질 수 있다.",
        author: "마리 블레이크"
    },
    {
        quote: "중요한 일이 명확하면 중요하지 않은 일도 명확해진다.",
        author: "칼 뉴포트"
    },
    {
        quote: "재치있는 유머는 사회에서 입을 수 있는 최고의 옷이다.",
        author: "스코틀랜드 속담"
    },
    {
        quote: "친절함은 사람들을 기쁘게 만들고 주위에 미소를 퍼뜨린다.",
        author: "워싱턴 어빙"
    },
    {
        quote: "가장 아름다운 꽃은 행복한 얼굴에서 피어나는 웃음꽃이다.",
        author: "아르투어 쇼펜하우어"
    },
    {
        quote: "즐거워하되 증거움에 빠지지 말고, 슬퍼하되 상심하지 말라.",
        author: "공자"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;