$(document).ready(function() {
    $('.js-choice').on('click', function() {
        const type = $(this).data('type');
        const name = $(this).data('name');
        const multiple = $(this).data('multiple');

        // Remove 'selected' class from all choices of the same type if not multiple
        if (multiple === "no") {
            $(`.js-choice[data-type="${type}"]`).removeClass('selected');
            $(this).addClass('selected');
        } else {
            $(this).toggleClass('selected');
        }

        // Update the emoji preview based on type
        if (type === 'skin') {
            $('.emoji-face').attr('class', `emoji-face ${name}`);
        } else if (type === 'eyes') {
            // Update both eyes
            $('.eyes .eye.left').attr('class', `eye left ${name}`);
            $('.eyes .eye.right').attr('class', `eye right ${name}`);
        } else if (type === 'mouth') {
            $('.mouth').attr('class', `mouth ${name}`);
        } else if (type === 'eyebrows') {
            // Update both eyebrows
            $('.eyebrows .eyebrow.left').attr('class', `eyebrow left ${name}`);
            $('.eyebrows .eyebrow.right').attr('class', `eyebrow right ${name}`);
        } else if (type === 'hat') {
            $('.hat').attr('class', `hat ${name}`);
        } else if (type === 'face-extras') {
            // Handle extras (multiple allowed)
            if ($(this).hasClass('selected')) {
                // Check if extra already exists to avoid duplication
                if (!$(`.face-extras.${name}`).length) {
                    $('.emoji-face').append(`<div class="face-extras ${name}"></div>`);
                }
            } else {
                $(`.face-extras.${name}`).remove();
            }
        } else if (type === 'item') {
            if (name === 'custom') {
                const customItem = $('.js-custom-item').val();
                $('.item').text(customItem);
            } else {
                $('.item').attr('class', `item ${name}`);
            }
        }
    });
});