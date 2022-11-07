'use strict';

let artistArray = [
  '? and The Mysterians',
  'The Beach Boys',
  'The Beach Boys',
  'Bo Diddley',
  'The Cavemen',
  'Dee Dee Sharp',
  'Del Shannon',
  'Johnny Rivers',
  'The Kinks',
  'Little Richard',
  'The Rolling Stones',
  'The Rolling Stones',
  'The Ramones',
  'The Ramones',
  'Tommy James and The Shondells',
  'Tommy James and The Shondells',
  'Tommy James and The Shondells',
  'The Velvet Underground',
];
let songArray = [
  '96 Tear Drops',
  "Surfin' Safari",
  'Surfer Girl',
  "Crackin' Up",
  'Mustang Sally',
  'Gravy',
  'Handy Man',
  'Memphis',
  "Sittin' on My Sofa",
  'Lucille',
  'Around and Around',
  'King Bee',
  'Danny Says',
  'Needles and Pins',
  'Do Something To Me',
  'Hanky Panky',
  'Mony Mony',
  'Waiting For The Man',
];

const createList = $(artistArray).each((index, artist) => {
  const artistName = artist;
  const songName = songArray[index];

  $('#song_list')
    .append(` <li class="flex justify-center text-center text-lg md:text-4xl">
    <a
      class=""
      href="https://www.google.com/search?q=${artistName}+${songName}+lyrics"
      ><span id="artist_name">${artistName}</span>&nbsp;-&nbsp;<span
        id="song_title"
        >${songName}</span
      ></a
    ><a
      class=""
      href="https://www.google.com/search?q=${artistName}+${songName}+ultimate+guitar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="music-icon h-6 w-6 md:h-10 md:w-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        /></svg
    ></a>
  </li>`);
});

const getInput = input => {
  const inputItem = $(input).val().trim();
  if (inputItem == '') {
    isValid = false;
  } else {
    return inputItem;
  }
};

$('#add_input_btn').click(() => {
  const artistName = getInput($(`#artist_input`));
  const songName = getInput($(`#song_input`));

  if (artistName != '' && songName != '') {
    //     $('#song_list').append(` <li>
    //   <a href="#"><span id="artist_name">${artistName}</span>
    //   &nbsp;-&nbsp;<span id="song_title">${songName}</span></a
    //   >
    // </li>`);
    artistArray.push(artistName);
    songArray.push(songName);

    $('#song_list')
      .prepend(` <li class="flex justify-center text-center text-lg md:text-4xl">
    <a
      class=""
      href="https://www.google.com/search?q=${artistName}+${songName}+lyrics"
      ><span id="artist_name">${artistName}</span>&nbsp;-&nbsp;<span
        id="song_title"
        >${songName}</span
      ></a
    ><a
      class=""
      href="https://www.google.com/search?q=${artistName}+${songName}+ultimate+guitar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="music-icon h-6 w-6 md:h-10 md:w-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        /></svg
    ></a>
  </li>`);

    $('#artist_input').val('');
    $('#song_input').val('');
    console.log(artistArray);
    console.log(songArray);
  }
});
