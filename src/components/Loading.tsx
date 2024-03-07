import '../loading.css'

const Loading = () => {
    return (
        <div className="flex flex-col items-center text-center justify-center mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 100 100"
                 preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#cdb67e" strokeWidth="5" r="35"
                        strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
                                      values="0 50 50;360 50 50" keyTimes="0;1"/>
                </circle>
            </svg>
            <p className="text-base font-semibold mt-3 text-main">Loading...</p>
        </div>
    )
}
export default Loading;