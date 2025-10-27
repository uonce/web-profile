// 1. HTML 문서가 모두 로드되면 실행
document.addEventListener('DOMContentLoaded', () => {
    
    // 2. 갤러리의 모든 'gallery-item' 요소를 가져옴
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // 3. 0부터 (이미지 개수 - 1)까지의 숫자 배열 생성
    const indices = Array.from(Array(galleryItems.length).keys());

    // 4. 인덱스 배열을 무작위로 섞음 (Fisher-Yates Shuffle)
    for (let i = indices.length - 1; i > 0; i--) {
        // 0부터 i까지의 랜덤한 인덱스 j를 뽑음
        const j = Math.floor(Math.random() * (i + 1));
        
        // i번째 요소와 j번째 요소를 맞바꿈
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // 5. 섞인 순서대로 0.15초(150ms) 간격으로 'visible' 클래스 추가
    indices.forEach((shuffledIndex, order) => {
        setTimeout(() => {
            // 'shuffledIndex' = 랜덤하게 뽑힌 이미지 번호
            galleryItems[shuffledIndex].classList.add('visible');
        }, order * 150); // 'order' = 0, 1, 2... 순서
    });

});