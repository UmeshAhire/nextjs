import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Vercel - Senior Customer Support Engineering Take Home Assessment&nbsp;
          <code className="font-mono font-bold">UMESH AHIRE</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <ol>
          <li><b>From <a href="https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8">this list</a>, rank your 5 most favourite and 5 least favourite support tasks. Provide a
          brief explanation for each.</b>
            <ul><li>As per the list i believe every task is crucial to follow to fulfill the job of a senior support engineer but to answer this question i listed out five favorite and five least favorite tasks from the list.</li>
            <li>Favorite Tasks :-
              <ol><li><u>Create video tutorials to help teach users a specific feature or use case</u>
   = This task directly affects user understanding and satisfaction while allowing for creative expression. Also, will help to reduce the number of cases related to the inquiries about the specific feature.
</li>
              <li><u>Write and maintain support articles and docs pages</u>
   = Writing and Maintaining documentation not only helps customers in troubleshooting independently but also reduces the support workload in the long run.
</li>
              <li><u>Work with the product team to develop a new feature based on feedback from customers</u>
   = Working together to improve the product in response to customer feedback with the product team can be satisfying and offers a feeling of pride in the product&apos;s success.

</li>
              <li><u>Help resolve billing issues for customers</u>
   = Assisting customers with billing matters demonstrates care for their financial concerns and helps maintain positive relationships.
</li>
              <li><u>Respond to queries on Twitter, Reddit, Hacker News, and other 3rd party sites</u>
   = Interacting with customers across multiple platforms not only expands the range of support but also offers insights into the opinions and issues of the community.
</li>
              </ol></li>
            <li>Least Favorite Tasks :-
              <ol><li><u>Manage a support team</u>
   = While important, managing a team can be time-consuming and may divert attention from direct customer support tasks.
</li>
              <li><u>Find and recruit teammates for the support team</u>
   = Recruitment involves a significant investment of time and effort, which is kind of a destraction from other support responsibilities.
</li>
              <li><u>Run ticket review sessions to make sure tone is consistent</u>
   = While necessary for maintaining a unified voice, I believe reviewing ticket tones would be repetitive and less directly impactful as compared to other tasks.
</li>
              <li><u>Scheduling time-off coverage and collaborating as part of a growing cohesive support team</u>
   = While crucial for team dynamics, I feel scheduling and coordination tasks are administrative and less directly related to customer support.
</li>
              <li><u>Work with people to figure out if Vercel is suitable for their use case</u>
   = Assessing suitability for Vercel will require extensive discussions and research, which could be time-consuming and less satisfying compared to other tasks.
</li>
              </ol>
            </li>
            </ul>
          </li>
          <li><b>What do you want to learn or do more of at work?</b>
          <ul>
            <li>I&apos;d want to learn more about the products we offer to customers by deploying them on my own setup and learning about the functions and features of the product. 
              Also, by keeping some reserved time, I would like to read all of the product documentation and troubleshooting manuals to make my support work easier.
            </li>
          </ul>
          </li>
          <li><b>Describe how you solved a challenge or technical issue that you faced in a previous role
(preferably in a previous support role). How did you determine that your solution was
successful?</b><ul>
  <li>Once, we encountered an issue where a client&apos;s module (Content Hub product by Acquia) wasn&apos;t syncing properly with their publisher site. This was causing a lot of frustration for the client, as their production deployment was heavily dependent on this synchronization. After investigating, I realized that there was a compatibility issue between the drupal version they were using and the module configuration.
To address this, I first checked for any available updates or patches for the module. After updating it, I reconfigured the module settings to match the requirement. Then, I ran several test syncs to ensure everything was working smoothly.
To determine the success of my solution, I closely monitored the client&apos;s system over the next few days. I stayed in touch with them, asking for feedback and checking if they encountered any further issues. When they reported back that the syncing problem was completely resolved and they were able to resume their workflow without any interruptions, I knew that my solution had been successful.
 </li>
</ul>
          </li>
          <li><b>When would you choose to use Edge Functions, Serverless Functions, or Edge
          Middleware with Vercel?</b>
            <ul>
              <li>Selecting between Edge Functions, Serverless Functions, or Edge Middleware with Vercel hinges on various factors, including the specific requirements of the project and the desired outcome.
              Will opt for Edge Functions when I need to deliver content swiftly with minimal latency. <br></br>Will Choose Serverless Functions when I require scalable solutions capable of handling complex computational workloads.
              <br></br> Will utilize Edge Middleware when I need to customize and enhance the behavior of your application at the edge. This could include tasks such as URL rewriting, caching, or adding security headers. 
              Edge Middleware allows for advanced customization while leveraging Vercel&apos;s infrastructure for seamless deployment and management.</li>
            </ul>
          </li>
          <li><b>Imagine a customer writes in requesting help with a build issue on a framework or
technology that you&apos;ve not seen before. How would you begin troubleshooting this and
what questions would you ask the customer to understand the situation better?</b>
            <ul>
              <li>When encountering a new framework or technology, my approach to troubleshooting would involve a blend of research, systematic analysis, and effective communication with the customer. I would start by researching the framework or technology in question. This could involve reading documentation, exploring online forums or communities dedicated to it, and seeking out any relevant tutorials or guides. 
              Once I have a foundational understanding, I would ask the customer to provide detailed information about the problem they&apos;re experiencing. This could include error messages, logs, steps to reproduce the issue, and any recent changes made to their environment. 
              To better understand the situation, I would ask the customer some targeted questions, such as,<br></br>o	What specific actions trigger the issue?<br></br>
o	Is the problem consistent, or does it occur intermittently?<br></br>
o	Have there been any recent updates or changes to the codebase, dependencies, or environment?<br></br>
o	Are there any error messages or logs available?<br></br>
o	Can the issue be replicated on other systems or environments?
</li>
            </ul>
          </li>
          <li><b>The customer from question 5 replies to your response with the below:
          &quot;I&apos;m so frustrated. I&apos;ve been trying to make this work for hours and I just can&apos;t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.&quot;
Please write a follow-up reply to the customer.</b>
            <ul>
              <li>I sincerely empathize with any inconvenience you may have experienced, and it is my utmost priority to assist you in overcoming the challenge at hand. Your proactive approach in seeking a prompt resolution is commendable.
              <br></br>
In order to effectively address the issue, comprehending the specifics surrounding the matter is essential. Through a series of targeted questions, we can narrow down the root cause and devise a solution tailored to your unique circumstances. This meticulous approach not only resolves the current concern but also serves as a proactive measure to prevent its recurrence.
<br></br>
Please be assured of my full dedication to swiftly resolving this issue. Would you kindly share any additional details or error messages you have encountered? With your collaboration, we can collaborate seamlessly to swiftly resolve the matter.</li>
            </ul>
          </li>
          <li><b>A customer writes in to the Helpdesk asking &quot;How do I do a redirect from the /blog
path to https://example.com?&quot; Please write a reply to the customer. Feel free to add any
information about your decision making process after the reply.</b>
            <ul>
              <li>Hi there,
              <br></br>
Thank you for reaching out to us!
<br></br>
To redirect the &quot;/blog&quot; path to &quot;https://example.com&quot;, you can typically achieve this by setting up a redirect rule in your server configuration or through your website&apos;s hosting provider.
<br></br>
If you&apos;re using Apache, you can add the following rule to your .htaccess file: <br></br><code className="font-mono font-bold">RewriteEngine On<br></br>
RewriteRule ^blog/?$ https://example.com [R=301,L]</code><br></br> and for next.js application, I would suggest you to visit to the following link and refer the steps mentioned there : https://nextjs.org/docs/app/api-reference/functions/redirect<br></br> If you have any further questions or need additional assistance, feel free to ask! 
<br></br>
Best regards, <br></br>Umesh Ahire</li>
            </ul>
          </li>
          <li><b>A customer is creating a site and would like their project not to be indexed by search
engines. Please write a reply to the customer. Feel free to add any information about
your decision making process after the reply.</b>
            <ul>
              <li>Hello,
              <br></br>
Thank you for reaching out to us!
<br></br>
To prevent your website from being indexed by search engines, you can utilize a few methods to instruct search engine crawlers not to index your site&apos;s content.<br></br>
You can create a robots.txt file at the root of your website&apos;s directory and include the following directive:<br></br><code className="font-mono font-bold">User-agent: * <br></br>
Disallow: /</code><br></br>This instructs search engine crawlers not to index any content on your site.<br></br>
Another method is to add a meta tag to the head section of your website&apos;s HTML pages. 
You can include the following attributes into the meta tag to instruct search engine crawlers not to index the page:<code className="font-mono font-bold">name=&quot;robots&quot; content=&quot;noindex, nofollow&quot;</code><br></br>
You can add this tag to all pages of your website to ensure none of them are indexed by search engines.
<br></br>
Implementing one or both of these methods should effectively prevent your website from being indexed by search engines.
<br></br>
If you need further assistance or have any questions, please feel free to ask!
<br></br>
Best regards,<br></br>Umesh Ahire</li>
            </ul>
          </li>
          <li><b>What do you think is one of the most common problems which customers ask Vercel for
help with? How would you help customers to overcome common problems, short-term
and long-term?</b>
            <ul>
              <li>One of the most common problems customers might ask Vercel for help with is likely related to deployment issues. This could range from difficulties deploying their application successfully to troubleshooting errors that occur during deployment.
<br></br>
Short-term assistance for customers facing deployment problems would involve providing detailed guidance tailored to their specific situation. This might include troubleshooting steps to identify and resolve any issues with their deployment configuration, ensuring that their code is properly structured and compatible with Vercel&apos;s platform, and assisting with any technical hurdles they encounter during the deployment process.
<br></br>
Long-term assistance would involve helping customers build a solid understanding of best practices for deploying and maintaining applications on Vercel. This could include providing comprehensive documentation, tutorials, and educational resources to empower customers to troubleshoot and resolve common deployment issues independently. Additionally, offering proactive support through regular updates, webinars, and community engagement can help customers stay informed about new features, optimizations, and best practices for optimizing their deployments over time.
<br></br>
By providing both short-term assistance to address immediate concerns and long-term support to foster customer expertise and self-sufficiency, Vercel can help customers overcome common deployment problems effectively and continue to succeed with their projects in the long run.</li>
            </ul>
          </li>
          <li><b>How could we improve or alter this familiarisation exercise?</b>
            <ul>
              <li>I don&apos;t think there is any changes needs to be done as this exercise looks pretty good and perfect.</li>
            </ul>
          </li>
        </ol>
      </div>
    </main>
  );
}