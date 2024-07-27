document.addEventListener('DOMContentLoaded', () => {
    // Data arrays for each scroll container
    const data1 = [
        { image: 'Images/s1-1.png', smallImage: 'Images/s1-2.jpg', title: 'ჯაზ ფესტივალის შეთავაზებები', text: 'IVERIA BEACH - დაიბრუნეთ 30%', hasSmallImage: true },
        { image: 'Images/s2-1.jpg', smallImage: 'Images/s2-2.png', title: 'ავტოა თეგეტა მოტორსი', text: 'თეგეტა მოტორსი - 50% ფასდაკლება', hasSmallImage: true },
        { image: 'Images/s3-1.png', smallImage: 'Images/s3-2.png', title: 'ავტო', text: 'თეგეტა მოტორსი - ბათუმი', hasSmallImage: true },
        { image: 'Images/s4-1.png', smallImage: 'Images/s3-2.png', title: 'Box 4', text: 'Le Meridien Batumi - 10%-იანი ფასდაკლება', hasSmallImage: true },
        { image: 'Images/s5-1.png', smallImage: 'Images/s5-2.png', title: 'Box 5', text: 'Colosseum Marina Hotel - 15%-იანი ფასდაკლება', hasSmallImage: true },
    ];

    const data2 = [
        { image: 'Images/10.png', title: 'ციფრული', text: 'თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია, ვინც აქტიურად მოიხმარს არასაბანკო პროდუქტებსა და შეთავაზებებს და ვისაც ურჩევნია დამოუკიდებლად, პირადი ბანკირის გარეშე მართოს საკუთარი ფინანსები და საბანკო ოპერაციები.', hasSmallImage: false },
        { image: 'Images/11.png', title: 'პრემიუმი', text: 'თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი - პრემიუმ ნაკრები, სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად, პირადი ბანკირის მომსახურებას გულისხმობს. პირადი ბანკირის მთავარი ამოცანა მომხარებლისთვის ცხოვრების გამარტივება და მისთვის უმაღლესი ხარისხის მომსახურების უზრუნველყოფაა.', hasSmallImage: false },
        { image: 'Images/12.png', title: '360', text: 'თიბისი კონცეპტის 360 ნაკრები განკუთვნილია მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპიტარესობებთან ერთად, კიდევ უფრო მეტი ფინანსური ინსტრუმენტი და გაზრდილი შესაძლებლობები ესაჭიროება', hasSmallImage: false },
    ];

    const data3 = [
        { image: 'Images/sq1.png', title: 'საუკეთესო პერსონალური მომსახურება საქართველოში 2024', text: 'The Global Finance', hasSmallImage: false },
        { image: 'Images/sq2.png', title: 'საუკეთესო პერსონალური მომსახურება საქართველოში 2023', text: 'Euromoney', hasSmallImage: false },
        { image: 'Images/sq3.png', title: 'საუკეთესო პერსონალური მომსახურება საქართველოში 2022', text: 'The Global Finance', hasSmallImage: false },
        { image: 'Images/sq4.png', title: 'საუკეთესო პერსონალური მომსახურება საქართველოში 2021', text: 'The Banker & PWM', hasSmallImage: false },
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
