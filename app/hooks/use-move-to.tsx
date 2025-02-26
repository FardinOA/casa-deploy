const useMoveTo = () => {
    function smoothScrollTo(targetPosition: number, duration = 500) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        function animationStep(currentTime: number) {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Apply easing for a smooth effect
            const easeInOutCubic =
                progress < 0.5
                    ? 4 * progress ** 3
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * easeInOutCubic);

            if (elapsedTime < duration) {
                requestAnimationFrame(animationStep);
            }
        }

        requestAnimationFrame(animationStep);
    }

    function moveTo(to: string) {
        const target = document.getElementById(to);
        const value = target ? target.offsetTop : 0;
        smoothScrollTo(value, 600);
    }

    return { moveTo };
};

export default useMoveTo;
