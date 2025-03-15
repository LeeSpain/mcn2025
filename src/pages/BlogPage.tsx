
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useLanguage } from '@/context/LanguageContext';

const BlogPage = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main>
        <section className="py-20 bg-gradient-to-b from-mcn-blue/10 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-mcn-blue-dark to-mcn-blue bg-clip-text text-transparent mb-6">
                {t('blog.title', 'Blog & Insights')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('blog.description', 'Explore the latest news, trends, and insights in healthcare technology and remote patient care.')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <article className="border border-mcn-gray rounded-xl overflow-hidden mb-8">
                  <div className="aspect-video relative">
                    <AspectRatio ratio={16 / 9}>
                      <img 
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Healthcare technology" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium bg-mcn-blue/10 text-mcn-blue px-2 py-1 rounded">
                        {t('blog.category.innovation', 'Healthcare Innovation')}
                      </span>
                    </div>
                    <h2 className="text-2xl font-display font-semibold mb-3">
                      {t('blog.featuredPost.title', 'The Future of Remote Patient Monitoring in Home Care Settings')}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {t('blog.featuredPost.excerpt', 'How new technologies are enabling better care for patients in the comfort of their own homes, improving outcomes and reducing hospitalizations.')}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                            alt="Author profile" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {t('blog.author.sarah', 'Dr. Sarah Johnson')}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {t('blog.date.june', 'June 15, 2023')}
                      </span>
                    </div>
                  </div>
                </article>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <article className="border border-mcn-gray rounded-xl overflow-hidden">
                    <div className="aspect-video relative">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                          alt="AI in elder care" 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="text-xs font-medium bg-mcn-blue/10 text-mcn-blue px-2 py-1 rounded">
                          {t('blog.category.tech', 'Tech Updates')}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {t('blog.posts.ai.title', 'Integrating AI Assistants into Elder Care')}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('blog.posts.ai.excerpt', 'How artificial intelligence is enhancing care management for seniors while preserving independence.')}
                      </p>
                      <span className="text-sm text-muted-foreground">
                        {t('blog.date.may', 'May 22, 2023')}
                      </span>
                    </div>
                  </article>
                  <article className="border border-mcn-gray rounded-xl overflow-hidden">
                    <div className="aspect-video relative">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                          alt="Health analytics dashboard" 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="text-xs font-medium bg-mcn-blue/10 text-mcn-blue px-2 py-1 rounded">
                          {t('blog.category.case', 'Case Study')}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {t('blog.posts.case.title', 'How Riverside Health Reduced Readmissions by 32%')}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('blog.posts.case.excerpt', 'A detailed look at how one healthcare network transformed patient outcomes with connected care.')}
                      </p>
                      <span className="text-sm text-muted-foreground">
                        {t('blog.date.april', 'April 8, 2023')}
                      </span>
                    </div>
                  </article>
                </div>
              </div>
              
              <div>
                <div className="sticky top-20">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">
                      {t('blog.sidebar.categories', 'Categories')}
                    </h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-mcn-blue hover:underline">{t('blog.category.innovation', 'Healthcare Innovation')} (12)</a></li>
                      <li><a href="#" className="text-mcn-blue hover:underline">{t('blog.category.tech', 'Tech Updates')} (8)</a></li>
                      <li><a href="#" className="text-mcn-blue hover:underline">{t('blog.category.case', 'Case Studies')} (5)</a></li>
                      <li><a href="#" className="text-mcn-blue hover:underline">{t('blog.category.stories', 'Patient Stories')} (7)</a></li>
                      <li><a href="#" className="text-mcn-blue hover:underline">{t('blog.category.news', 'Industry News')} (10)</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {t('blog.sidebar.popular', 'Popular Posts')}
                    </h3>
                    <div className="space-y-4">
                      <a href="#" className="flex items-start space-x-3">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                            alt="Technology transforming healthcare" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">
                            {t('blog.popular.transform.title', '5 Ways Technology Is Transforming Home Healthcare')}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t('blog.date.march', 'March 12, 2023')}
                          </p>
                        </div>
                      </a>
                      <a href="#" className="flex items-start space-x-3">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                            alt="Telehealth in nursing" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">
                            {t('blog.popular.telehealth.title', 'The Role of Telehealth in Modern Nursing Practice')}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t('blog.date.february', 'February 28, 2023')}
                          </p>
                        </div>
                      </a>
                      <a href="#" className="flex items-start space-x-3">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                            alt="Healthcare security" 
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2">
                            {t('blog.popular.privacy.title', 'Privacy and Security in Connected Healthcare Devices')}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {t('blog.date.january', 'January 15, 2023')}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
