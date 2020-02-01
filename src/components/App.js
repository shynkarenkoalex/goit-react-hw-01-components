import React from 'react';
import user from '../user.json';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile';
import SectionStatistics from './Statistics/SectionStatistics';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

export default function App() {
    return (
        <>
            <Profile user = {user}/>
            <SectionStatistics title = "Upload stats">
                <Statistics  stats = {statisticalData}/>
            </SectionStatistics>
            <FriendList friends={friends} />            
            <TransactionHistory items={transactions} />
        </>       
    );
}