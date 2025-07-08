import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro', // docs/intro.md
    {
      type: 'category',
      label: '2. Create New Note',
      link: {
        type: 'generated-index',
        description: 'Create new notes with various methods'
      },
      items: [
        {
          type: 'category',
          label: 'Quick Capture',
          link: {
            type: 'generated-index',
            description: 'Quickly capture notes in multiple ways'
          },
          items: [
            'record/record_page',         // docs/record/record_page.md
            'record/upload_audio_page',   // docs/record/upload_audio_page.md
            'record/upload_document_page',// docs/record/upload_document_page.md
            'record/upload_image_page',   // docs/record/upload_image_page.md
            'record/taken_a_photo_page',  // docs/record/taken_a_photo_page.md
            'record/web_link_page',       // docs/record/web_link_page.md
            'record/input_text_page',     // docs/record/input_text_page.md
          ],
        },
        'record/advanced_setting_page',   // docs/record/advanced_setting_page.md
      ],
    },
    {
      type: 'category',
      label: '3. Note AI Tools',
      link: {
        type: 'generated-index',
        description: 'AI-powered tools for your notes'
      },
      items: [
        {
          type: 'category',
          label: 'Basic Tools',
          link: {
            type: 'generated-index',
            description: 'Essential AI tools for note-taking'
          },
          items: [
            'note_detail/summary_page',
            'note_detail/transcript_page',
            'note_detail/ai_chat_page',
            'note_detail/translate_page',
          ],
        },
        {
          type: 'category',
          label: 'Visual Content Creation',
          link: {
            type: 'generated-index',
            description: 'Create visual content from your notes'
          },
          items: [
            'note_detail/mindmap_page',
            'note_detail/slide_show_page',
            'note_detail/podcast_page',
            'note_detail/flashcard_page',
            'note_detail/quiz_page',
            'note_detail/short_page',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '4. Note Management',
      link: {
        type: 'generated-index',
        description: 'Manage your notes efficiently'
      },
      items: [
        'note_detail/edit_title_page',
        'note_detail/copy_page',
        'note_detail/export_note_page',
        'note_detail/share_note_page',
        'note_detail/delete_note_page',
      ],
    },
    {
      type: 'category',
      label: '5. Search & Organization',
      link: {
        type: 'generated-index',
        description: 'Search and organize your notes'
      },
      items: [
        'folder/my_folder_page',
        'folder/folder_detail_page',
        'folder/move_to_folder_page',
        'search/search_page',
      ],
    },
    {
      type: 'category',
      label: '6. App Settings',
      link: {
        type: 'generated-index',
        description: 'Application and account settings'
      },
      items: [
        'setting/custom_tabs_page',
        'setting/avata_page',
        'setting/change_page',
        'setting/change_plan_page',
        'setting/delete_account_page',
        'setting/edit_name_page',
        'setting/login_page',
        'setting/manage_recordings_page',
        'setting/rate_page',
        'setting/recording_schedule_page',
        'setting/referral_page',
        'multiple_languages/multiple_languages_page',
        'user_subcription/user_subcription_page',
      ],
    },
    {
      type: 'category',
      label: '7. Device & Platform Integration',
      link: {
        type: 'generated-index',
        description: 'Integrate with devices and other platforms'
      },
      items: [
        'home/home_page', // Nếu có file docs/home/home.md
        'apple_share/apple_share_page',
        'apple_watch/apple_watch_page',
        // Thêm các mục Google Meet, Google Calendar nếu có file tương ứng
      ],
    },
  ],
};

export default sidebars;