import { useEffect, useState } from 'react';

function Countdown() {
  const targetDate = new Date('2024-08-20T01:00:00Z'); // 08:00 WIB (WIB = UTC+7, sehingga diatur ke 01:00 UTC)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center p-5">
      <div className="text-2xl">
        <span>{timeLeft.days} hari </span>
        <span>{timeLeft.hours} jam </span>
        <span>{timeLeft.minutes} menit </span>
        <span>{timeLeft.seconds} detik </span>
      </div>
    </div>
  );
}

export default Countdown;
