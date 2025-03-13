
import React from 'react';
import ClientInformation from './client/ClientInformation';
import HealthOverview from './client/HealthOverview';
import DeviceStatus from './client/DeviceStatus';
import RecentInteractions from './client/RecentInteractions';

const ClientProfile: React.FC = () => {
  return (
    <>
      {/* Client Information */}
      <ClientInformation />

      {/* Client Health Data */}
      <HealthOverview />

      {/* Device Status */}
      <DeviceStatus />

      {/* Recent Interactions */}
      <RecentInteractions />
    </>
  );
};

export default ClientProfile;
