document.addEventListener('DOMContentLoaded', () => {
    // Data arrays for each scroll container
    const data1 = [
        { image: 'Images/s1-1.png', smallImage: 'Images/s1-2.jpg', title: 'Box 1', text: 'Description 1', hasSmallImage: true },
        { image: 'Images/s2-1.jpg', smallImage: 'Images/s2-2.png', title: 'Box 2', text: 'Description 2', hasSmallImage: true },
        { image: 'Images/s3-1.png', smallImage: 'Images/s3-2.png', title: 'Box 3', text: 'Description 3', hasSmallImage: true },
        { image: 'Images/s4-1.png', smallImage: 'Images/s3-2.png', title: 'Box 4', text: 'Description 4', hasSmallImage: true },
        { image: 'Images/s5-1.png', smallImage: 'Images/s5-2.png', title: 'Box 5', text: 'Description 5', hasSmallImage: true },
        { image: 'Images/s6-1.png', smallImage: 'Images/s6-2.png', title: 'Box 6', text: 'Description 6', hasSmallImage: true },
    ];

    const data2 = [
        { image: 'Images/10.png', title: 'Box 7', text: 'Description 7', hasSmallImage: false },
        { image: 'Images/11.png', title: 'Box 8', text: 'Description 8', hasSmallImage: false },
        { image: 'Images/12.png', title: 'Box 9', text: 'Description 9', hasSmallImage: false },
    ];

    const data3 = [
        { image: 'Images/sq1.png', title: 'Box 10', text: 'Description 10', hasSmallImage: false },
        { image: 'Images/sq2.png', title: 'Box 11', text: 'Description 11', hasSmallImage: false },
        { image: 'Images/sq3.png', title: 'Box 12', text: 'Description 12', hasSmallImage: false },
        { image: 'Images/sq4.png', title: 'Box 13', text: 'Description 13', hasSmallImage: false },
    ];

    const createScrollBoxes = (containerId, data) => {
        const scrollContent = document.getElementById(containerId);
        scrollContent.innerHTML = '';

        data.forEach((item, index) => {
            const box = document.createElement('div');
            box.className = 'scrollable-box';

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

    // Initialize scroll boxes for each container
    createScrollBoxes('scroll-content-1', data1);
    createScrollBoxes('scroll-content-2', data2);
    createScrollBoxes('scroll-content-3', data3);

    // Function to enable drag-to-scroll functionality
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
            if (isDragging) {
                isDragging = false;
                scrollContainer.style.cursor = 'grab';
            }
        });

        scrollContainer.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                scrollContainer.style.cursor = 'grab';
            }
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    };

    // Initialize drag-to-scroll for each scroll container
    initDragScroll('#scroll-container-1');
    initDragScroll('#scroll-container-2');
    initDragScroll('#scroll-container-3');
});
