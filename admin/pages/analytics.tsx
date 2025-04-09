import Link from 'next/link';
import { PageContainer } from '@keystone-6/core/admin-ui/components';
import React from 'react';

export default function Analytics() {
    return (
        <PageContainer header="Analytics">
            <h1>This is a custom Admin UI Page</h1>
            <p>It can be accessed via the route <Link href="/analytics">Analytics</Link></p>
        </PageContainer>
    )
}