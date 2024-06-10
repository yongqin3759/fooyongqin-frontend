import React from 'react'

const FYPModal = () => {
  return (
    <div class="p-2">

        <p class="mb-6">
            My project aimed to explore the implementation of server-side logic to adhere to data protection regulations, primarily focusing on the handling of expired personal data. Using technological frameworks consisting of Express for the backend server and MongoDB for the database, this project discusses strategies for optimizing the backend server as well as the database to ensure the timely deletion of data. By delving into the intricacies of database management, we address the critical need for efficient, secure, and compliant data handling practices. This dual focus on server-side logic and database optimization, along with expounding on implementation details within the specified technological context, hopes to position my paper as a valuable resource for developers, organizations, and researchers who seek practical insights into the nuanced realm of data protection implementation.
        </p>

        <h2 class="text-2xl font-semibold mb-4">Project Objectives</h2>
        <p class="mb-6">
            The removal of outdated data may seem straightforward, but it involves intricate complexities. In this project, our objective is to explore ways to manage expired data efficiently and reliably, and more importantly measure performance over others. This paper will focus on the performance and optimization of removing expired data in the context of the GDPR.
        </p>

        <h2 class="text-2xl font-semibold mb-4">Sections</h2>
        <div class="mb-6">
            <h3 class="text-xl font-semibold mb-2">1. The performance of off-the-shelf MongoDB TTL in the context of GDPR</h3>
            <ul class="list-disc list-inside mb-4">
                <li>Measurements in performance</li>
                <li>Advantages and drawbacks</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">2. Proposed Solution: Instrumenting MongoDB for Accurate Deletions</h3>
            <ul class="list-disc list-inside">
                <li>Implementation details</li>
                <li>Measurements in performance</li>
                <li>Advantages and drawbacks</li>
            </ul>
        </div>
    </div>
  )
}

export default FYPModal