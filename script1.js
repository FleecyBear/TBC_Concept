document.addEventListener('DOMContentLoaded', () => {
    const data1 = [
        { image: 's1-1.png', smallImage: 's1-2.jpg', title: 'Box 1', text: 'Description 1', hasSmallImage: true },
        { image: 's2-1.jpg', smallImage: 's2-2.png', title: 'Box 2', text: 'Description 2', hasSmallImage: true },
        { image: 's3-1.png', smallImage: 's3-2.png', title: 'Box 3', text: 'Description 3', hasSmallImage: true },
        { image: 's4-1.png', smallImage: 's3-2.png', title: 'Box 4', text: 'Description 4', hasSmallImage: true },
        { image: 's5-1.png', smallImage: 's5-2.png', title: 'Box 5', text: 'Description 5', hasSmallImage: true },
        { image: 's6-1.png', smallImage: 's6-2.png', title: 'Box 6', text: 'Description 6', hasSmallImage: true },
    ];

    const data2 = [
        { image: '10.png', title: 'Box 7', text: 'Description 7', hasSmallImage: false },
        { image: '11.png', title: 'Box 8', text: 'Description 8', hasSmallImage: false },
        { image: '12.png', title: 'Box 9', text: 'Description 9', hasSmallImage: false },
    ];

    const createScrollBoxes = (containerId, data) => {
        const scrollContent = document.getElementById(containerId);
        scrollContent.innerHTML = '';

        data.forEach(item => {
            const box = document.createElement('div');
            box.className = 'scrollable-box';

            box.addEventListener('click', () => {
                window.location.href = 'your-link-here.html';
            });

            const largeImage = document.createElement('img');
            largeImage.src = item.image;
            largeImage.alt = item.title;
            largeImage.className = 'large-image';
            largeImage.draggable = false;
            box.appendChild(largeImage);

            if (item.hasSmallImage) {
                const smallImage = document.createElement('img');
                smallImage.src = item.smallImage;
                smallImage.alt = 'Small image';
                smallImage.className = 'small-image';
                smallImage.draggable = false;
                box.appendChild(smallImage);
            }

            const textContent = document.createElement('div');
            textContent.className = 'text-content';

            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = item.title;
            textContent.appendChild(title);

            const description = document.createElement('div');
            description.className = 'description';
            description.textContent = item.text;
            textContent.appendChild(description);

            box.appendChild(textContent);
            scrollContent.appendChild(box);
        });
    };

    createScrollBoxes('scroll-content-1', data1);
    createScrollBoxes('scroll-content-2', data2);

    const initDragScroll = (containerSelector) => {
        const scrollContainer = document.querySelector(containerSelector);
        let isDragging = false;
        let startX, scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
            scrollContainer.style.cursor = 'grabbing';
            e.preventDefault();
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDragging = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDragging = false;
            scrollContainer.style.cursor = 'grab';
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    };

    initDragScroll('#scroll-container-1');
    initDragScroll('#scroll-container-2');
});
