const hlsUrl = 'https://s06.nm-cdn.top/files/81476453/720p/-720p.m3u8'; // Example HLS playlist URL

// Define the cookies you want to include
const cookies = 'HstCfa1190725=1729006648061; HstCmu1190725=1729006648061; SE81557031=81639943; 81639943=974%3A1496; t_hash_t=4462c0c5c559f79ee841e8fa9ea52e3a%3A%3A95101abdb8a5a6b1a4fe180c5cf1099d%3A%3A1730483541%3A%3Ani; HstCnv1190725=3; HstCns1190725=3; recentplay=70267241-SE81557031-81284730; 70267241=4151%3A7873; HstCla1190725=1730483985412; HstPn1190725=2; HstPt1190725=9; t_hash=d7d8d196c19cc73f3575948b7477b8f7%3A%3A1730483996%3A%3Ani';

fetch(hlsUrl, {
    method: 'GET', // or 'POST' if needed
    credentials: 'include', // Include credentials such as cookies
    headers: {
        'Cookie': cookies, // Include cookies in the request
        'Accept': 'application/vnd.apple.mpegurl', // Specify the accepted content type
    },
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text(); // Parse the response as text
})
.then(data => {
    console.log('HLS Playlist:', data); // Log the playlist content
    // Further process the playlist or load it in a player
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
