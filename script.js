document.addEventListener('DOMContentLoaded', (event) => {
            const modal1 = document.getElementById('modal1');
            const modal2 = document.getElementById('modal2');
            const openModal1Btn = document.getElementById('openModal1');
            const openModal2Btn = document.getElementById('openModal2');
            const closeModal1Btn = document.getElementById('closeModal1');
            const closeModal2Btn = document.getElementById('closeModal2');
            const formFields = document.querySelectorAll('#modal2 input');

            function openModal(modal) {
                modal.style.display = 'block';
            }

            function closeModal(modal) {
                modal.style.display = 'none';
            }

            openModal1Btn.addEventListener('click', () => {
                openModal(modal1);
            });

            openModal2Btn.addEventListener('click', () => {
                closeModal(modal1);
                openModal(modal2);
            });

            closeModal1Btn.addEventListener('click', () => {
                closeModal(modal1);
            });

            closeModal2Btn.addEventListener('click', () => {
                closeModal(modal2);
            });

            window.addEventListener('click', (event) => {
                if (event.target === modal1) {
                    closeModal(modal1);
                }
                if (event.target === modal2) {
                    closeModal(modal2);
                }
            });

         
            const submitButton = document.getElementById('openModal2');

            submitButton.addEventListener('click', (event) => {
                let isValid = true;

                formFields.forEach(field => {
                    if (field.value.trim() === '') {
                        field.classList.add('error');
                        isValid = false;
                    } else {
                        field.classList.remove('error');
                    }
                });

                if (!isValid) {
                    event.preventDefault();
                }
            });

            formFields.forEach(field => {
                field.addEventListener('input', () => {
                    if (field.value.trim() !== '') {
                        field.classList.remove('error');
                    }
                });
            });
        });
        document.getElementById('burger-menu').addEventListener('click', function () {
            document.getElementById('nav-menu').style.width = '50%';
        });
        
        document.getElementById('close-menu').addEventListener('click', function () {
            document.getElementById('nav-menu').style.width = '0';
        });
        