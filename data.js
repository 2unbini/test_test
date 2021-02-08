const questions = [
    {
        id:1,
        content: {
            question: '새로 만난 사람이 자기 mbti에 대해 말한다.<br>당신의 반응은?',
            options: [
                {id: 1, answer: '상대방의 mbti 유형으로 성격을 어림짐작한다'},
                {id: 2, answer: "'아 그렇구나'<br>아무 생각 없다"}
            ]
        }
    },
    {
        id: 2,
        content: {
            question: '친구가 성격 테스트 링크를 보내왔다.<br>당신의 행동은?',
            options: [
                {id:1, answer: '귀찮아서 패스한다'},
                {id:2, answer: '당장 해보고 퍼나른다'}
            ]
        }
    },
    {
        id: 3,
        content: {
            question: 'mbti와 같은 성격, 심리 테스트를 좋아한다.',
            options: [
                {id:1, answer: '아니다'},
                {id:2, answer: '그렇다'}
            ]
        }
    },
    {
        id:4,
        content: {
            question: '유행하는 성격 테스트를 발견하면,',
            options:[
                {id:1, answer: '유행을 선도하고싶다!<br>공유한다'},
                {id:2, answer: '내가 발견하지 않고,<br>공유당한다'}
            ]
        }
    },
    {
        id:5,
        content: {
            question:'이 테스트가 재미없다.',
            options:[
                {id:1, answer: 'ㅇㅇ 짜증난다'},
                {id:2, answer: '의도가 뻔히 보인다'},
            ]
        }
    }
];

const scores = {
    1: {1: 5, 2: 0},
    2: {1: 0, 2: 5},
    3: {1: 0, 2: 5},
    4: {1: 5, 2: 0},
    5: {1: 0, 2: 5}
};

const results = [
    {
        id:1,
        content:{
            name: '뇌절왕',
            description: '"너oo일 줄 알았음ㅋ"<br>새로운 테스트가 보이면 바로 단톡으로 ㄱㄱ하는 당신.<br>mbti로 성격을 따져서 가끔 일반화의 오류를 범하는 당신은,<br>테스트계의 뇌절왕'
        }
    },
    {
        id:2,
        content:{
            name: '중립기어',
            description: '"난 이거나옴ㅋㅋ"<br>단톡에 올라오면 하는데, 찾아서 하진 않는 당신.<br>대세와 유행을 거스르지 않고 따르는 당신은,<br>테스트계의 중립기어'
        }
    },
    {
        id:3,
        contetn:{
            name: '혐오자',
            description:'(읽씹)<br>어디에서 자꾸 뭣같은 테스트가 나오는지 모르겠는 당신.<br>더이상 테스트를 하고 싶지도, 보고 싶지도 않은 당신은,<br>테스트계의 혐오자'
        }
    }
];

export {questions, scores, results};