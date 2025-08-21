//dummmy apiCaller function

function apiCaller(id, callback) {
    setTimeout(() => {
        console.log(`data of id ${id} is fetched`);
        if (callback) callback();
    }, 2000);
}

apiCaller(1, () => {
    apiCaller(2, () => {
        apiCaller(3, () => {
            apiCaller(4, () => {
                console.log('All data fetched');
            });
        });
    });
});