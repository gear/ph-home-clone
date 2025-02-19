import dynamic from 'next/dynamic'

export const SleepMosaicPlot = dynamic(
    () => import('./Plot'),
    { ssr: false, loading: () => <div>Loading plot...</div> }
);

export default SleepMosaicPlot;
