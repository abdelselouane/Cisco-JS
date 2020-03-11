export const timer = ms => logName => new Promise(resolve =>
    setTimeout(
        log => {
            console.log(log);
            resolve();
        }, ms, `${logName} called`
    )
);